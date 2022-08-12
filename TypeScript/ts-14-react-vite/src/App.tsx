import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import reminderService from './services/ReminderService';
import Reminder from './types/reminder';

// const initReminders: Reminder[] = [
//   { id: 1, todo: 'Game on Sunday', completed: false, userId: 5 },
//   { id: 2, todo: 'Call about the House', completed: true, userId: 5 },
// ];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  async function loadReminders(): Promise<void> {
    const rems = await reminderService.getReminders();
    console.log('rems ===', rems);
    setReminders(rems);
  }

  async function handleDelete(deleteId: Reminder['id']): Promise<void> {
    console.log('deleteId ===', deleteId);
    // BE delete
    const resultDelete = await reminderService.deleteReminder(deleteId);
    console.log('resultDelete ===', resultDelete);
    if (resultDelete.isDeleted) {
      // FE delete
      setReminders((prevReminders) => prevReminders.filter((r) => r.id !== deleteId));
    }
  }

  return (
    <div className='container'>
      <ReminderList items={reminders} onDeleteReminder={handleDelete} />
    </div>
  );
}

export default App;

import axios from 'axios';
import Reminder from '../types/reminder';

interface TodoResponse {
  todos: Reminder[];
}

class ReminderService {
  http = axios.create({
    baseURL: 'https://dummyjson.com/',
  });

  async getReminders(): Promise<Reminder[]> {
    const resp = await this.http.get<TodoResponse>('todos');
    return resp.data.todos;
  }
  async deleteReminder(id: Reminder['id']) {
    const resp = await this.http.delete<Reminder & { isDeleted: boolean }>(`/todos/${id}`);
    return resp.data;
  }
}

export default new ReminderService();

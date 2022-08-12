// User generuoja li elementus is props

export default function User(props) {
  return props.data.map((uObj) => {
    return <li key={uObj.id}>{uObj.name}</li>;
  });
}

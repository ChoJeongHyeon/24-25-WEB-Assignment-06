export type Person = {
  id: number;
  name: string;
  age: number;
};

export type Persons = {
  persons: Person[];
};

function Props(props: Persons) {
  return (
    <div>
      {props.persons.map((person) => (
        <h2 key={person.id}>
          {person.name}
          {person.age}
        </h2>
      ))}
    </div>
  );
}

export default Props;

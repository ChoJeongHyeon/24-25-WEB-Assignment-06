export type Props = {
  // 타입을 명시하는 이유는 타입스크립트에는 타입이 필수이기 때문에
  message: string;
  sender: string;
};

function Child(props: Props) {
  return (
    <div>
      <p>자식</p>
      <p>아들, 딸</p>
      <h1>{props.message}</h1>
      <h1>{props.sender}</h1>
    </div>
  );
}

export default Child;

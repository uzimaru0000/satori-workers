export const Example = ({ msg }: { msg: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontSize: '32px',
        }}
      >
        {msg}
      </span>
    </div>
  );
};

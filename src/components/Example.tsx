export const Example = ({ msg }: { msg: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(45deg, rgba(25,152,97,1) 0%, rgba(0,93,255,1) 100%)',
      }}
    >
      <span
        style={{
          fontSize: '64px',
          color: '#ffffff',
        }}
      >
        {msg}
      </span>
    </div>
  );
};

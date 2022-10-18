export const SuperChat = ({
  icon,
  name,
  price,
  message,
}: {
  icon: string;
  name: string;
  price: number;
  message: string;
}) => {
  const { header, body, text } = color(price);

  return (
    <div
      id="super-chat"
      style={{
        width: '337px',
        display: 'flex',
        flexDirection: 'column',
        color: text,
        fontWeight: '500',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '8px 16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          background: header,
        }}
      >
        <img
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgb(128, 128, 128)',
          }}
          src={icon}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '16px',
          }}
        >
          <div>{name}</div>
          <div>￥{price.toLocaleString()}</div>
        </div>
      </div>
      {message && (
        <div
          style={{
            background: body,
            padding: '8px 16px',
            fontWeight: '400',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

const color = (price: number) => {
  if (price < 1000) {
    return {
      header: 'rgb(0, 183, 155)',
      body: 'rgb(27, 230, 173)',
      text: 'black',
    };
  } else if (price < 5000) {
    return {
      header: 'rgb(255, 170, 0)',
      body: 'rgb(255, 195, 34)',
      text: 'black',
    };
  } else if (price < 10000) {
    return {
      header: 'rgb(186, 23, 81)',
      body: 'rgb(231, 28, 88)',
      text: 'white',
    };
  } else {
    return {
      header: 'rgb(183, 35, 26)',
      body: 'rgb(205, 49, 37)',
      text: 'white',
    };
  }
};

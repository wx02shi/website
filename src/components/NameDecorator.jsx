const randomNameDecorator = (name) => {
  const special = [
    `🗿 ${name}`,
    `${name} 🚀`,
    <text>
      🏎️💨 <text className="italic">{name}</text>
    </text>,
    `🆙 ${name}`,
    `${name} 📣`,
    `[${name}]`,
    `${name}!`,
  ];

  const num = Math.floor(Math.random() * special.length * 4);

  if (num < special.length) {
    return special[num];
  }

  return `*${name}`;
};

export default randomNameDecorator;

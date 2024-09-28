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
    `${name.replace(" ", "_")}.exe`,
  ];

  let num = Math.floor(Math.random() * special.length * 4);

  if (num < special.length) {
    return special[num];
  }
  num = 6;

  return `*${name}`;
};

export default randomNameDecorator;

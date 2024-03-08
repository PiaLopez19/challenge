interface BotonProps {
  texto: string
  clases: string
  icon?: React.ReactNode;
}

const Button: React.FC<BotonProps> = ({ texto, clases, icon }) => {

  return (
    <button className={`py-3 px-4 flex justify-center items-center font-[Arial] ${clases}`}>
      {icon}
      {texto}
    </button>
  );
};

export default Button;
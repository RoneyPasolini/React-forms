import { useEffect, useRef } from "react";

const FormPage = () => {
  const formRef = useRef(null); //Padrão iniciar antes por boa pratica

  const formInput = useRef({
    //Valores que serão inseridos como padrão.
    nome: "",
    idade: "",
    genero: "Outros",
    dreams: "",
  });

  const handleClear = () => {
    formRef.current.reset(); //Reset reseta o formulario

    formInput.current = {
      nome: "",
      idade: "",
      genero: "Masculino",
      dreams: "",
    };
  };

  const handleInput = (event) => {
    formInput.current = {
      ...formInput.current, //spread;
      [event.target.name]: event.target.value,
    }; //formInput.current é o padrão o useRef => get e set
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formInput.current);
  };

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>Nome</div>
        <input
          required={true} //Pode passar sem o true escrito
          value={formInput.nome}
          name="nome"
          type="text"
          onInput={handleInput}
        />

        <div>Age</div>
        <input
          min={13}
          max={100}
          name="idade"
          required={true}
          value={formInput.idade}
          type="number"
          onInput={handleInput}
        />

        <div>Gender</div>
        <select
          value={formInput.genero}
          name="genero"
          required={true}
          onChange={handleInput}
        >
          <option>Selecione uma opção</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
        <div>My dreams are</div>
        <textarea
          required={true}
          value={formInput.dreams}
          name="dreams"
          onChange={handleInput}
        />
        <div>
          <button type="submit">Confirm</button> {"   "}
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;

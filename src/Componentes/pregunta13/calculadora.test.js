import Calculadora from "./Calculadora";
import { shallow } from "enzyme";

describe("Pruebas sobre el componente Calculadora", () => {
  test("Simular Click Boton Suma", () => {
    const wrapper = shallow(
      <Calculadora num1={50} num2={20} nombre="Santiago 1842025" />
    );
    const btn1 = wrapper.find("button").at(0).simulate("click");
    const suma = wrapper.find("h2").text();
    expect(suma).toBe("Señor Santiago 1842025 la suma o resta es 70");
  });

  test("Simular Click Boton Resta", () => {
    const wrapper = shallow(
      <Calculadora num1={35} num2={20} nombre="Santiago 1842025" />
    );
    const btn1 = wrapper.find("button").at(1).simulate("click");
    const resta = wrapper.find("h2").text();
    expect(resta).toBe("Señor Santiago 1842025 la suma o resta es 15");
  });
});

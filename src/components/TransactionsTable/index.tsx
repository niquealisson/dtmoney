import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

    return(
        <Container>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr> 
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimento de Web-site</td>
                    <td className="deposit">R$15.000,00</td>
                    <td>Desenvolvimento REACT</td>
                    <td>03/07/2022</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">- R$1.100,00</td>
                    <td>Sala Comercial</td>
                    <td>25/07/2022</td>
                </tr>
            </tbody>
          </table>  
        </Container>
    );
}
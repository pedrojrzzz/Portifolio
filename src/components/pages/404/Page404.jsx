import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button } from "./styled";

export default function Page404() {
  const { currentColorConfig } = useSelector((state) => state.theme);
  return (
    <Container colorConfig={currentColorConfig}>
      <div className="content-404">
        <h1>404</h1>
        <Link>
          <Button colorConfig={currentColorConfig}>Retornar à pagina principal</Button>
        </Link>
      </div>
    </Container>
  );
}

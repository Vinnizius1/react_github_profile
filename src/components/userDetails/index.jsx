import React from "react";

import { Container, Name, Username, Description } from "./styles";

function UserDetails(props) {
    return (
        <Container>
            <Name>{props.name}</Name>
            <Username>{props.login}</Username>
            {/* props?.bio virá APENAS se o usuário tiver uma bio! Assim, não quebrará a aplicação */}
            <Description>{props?.bio}</Description>
        </Container>
    );
}

export default UserDetails;

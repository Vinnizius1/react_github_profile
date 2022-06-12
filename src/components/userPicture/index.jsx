import React from "react";
import { Container, ProfilePicture } from "./styles.js";

function UserPicture(props) {
    return (
        <Container>
            <ProfilePicture src={props.url} alt={props.alternativeText} />
        </Container>
    );
}

export default UserPicture;

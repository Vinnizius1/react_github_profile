import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumbers from "../components/userNumbers";

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture
                    url="https://avatars.githubusercontent.com/u/81592753?v=4"
                    alternativeText="image"
                />
                <UserDetails name="Vinicius Matos" login="#vinnizius1" bio="Um texto qualquer" />
                <UserNumbers />
            </UserContainer>
        </Container>
    );
}

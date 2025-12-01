import * as S from "./styles";
import { dataServices } from "./dataServices";
import { RightOutlined } from "@ant-design/icons";

export function ServiceCard({ onServiceClick }) {
  return (
    <S.Container>
      {dataServices.map((item) => {
        return (
          <S.Card key={item.id}>
            <S.Title>{item.name}</S.Title>
            <S.Avatar src={item.avatar.src} alt="service-image" />
            {/* <S.Text>{item.description}</S.Text> */}
            <S.Button onClick={() => onServiceClick(item.type)}>
              Saiba mais <RightOutlined />
            </S.Button>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

import { NodeType } from "@/myTypes/roadmap/internal";
import * as S from "./roadmapNodeList.styles";

type RoadmapNodeListProps = {
  roadmapTitle: string;
  nodeInfo: NodeType[];
};

const RoadmapNodeList = ({ roadmapTitle, nodeInfo }: RoadmapNodeListProps) => {
  return (
    <S.RoadmapNodeList>
      <S.Title>
        🐘 <strong>{roadmapTitle}</strong>의 로드맵 🐘
      </S.Title>
      {nodeInfo.map((node, index) => {
        return (
          <S.NodeItemContainer key={index}>
            <S.NodeIndicator>{index + 1}</S.NodeIndicator>
            <S.NodeContent>
              <S.NodeTitle>{node.title}</S.NodeTitle>
              <S.NodeDescription>{node.description}</S.NodeDescription>
              {node.imageUrls.map((nodeImage, index) => {
                return (
                  <S.ImageWrapper key={index}>
                    <img src={nodeImage} alt="노드 이미지" loading="lazy" />
                  </S.ImageWrapper>
                );
              })}
            </S.NodeContent>
          </S.NodeItemContainer>
        );
      })}
    </S.RoadmapNodeList>
  );
};

export default RoadmapNodeList;

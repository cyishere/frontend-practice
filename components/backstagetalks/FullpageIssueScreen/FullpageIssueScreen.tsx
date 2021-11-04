import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";

import { ISSUES } from "data/backstagetalks";
import IssueScreen from "../IssueScreen";

interface FullpageIssueScreenProps {
  onLeave: (origin: any, destination: any, direction: any) => void;
  afterLoad: (origin: any, destination: any, direction: any) => void;
}

const FullpageIssueScreen: React.FC<FullpageIssueScreenProps> = ({
  onLeave,
  afterLoad,
}) => {
  const COLORS = ISSUES.map((issue) => issue.color);

  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={COLORS}
      onLeave={onLeave.bind(this)}
      afterLoad={afterLoad.bind(this)}
      render={() => {
        return (
          <Wrapper id="fullpage-wrapper">
            {ISSUES.map((issue) => (
              <Section
                className="section section1"
                key={issue.id}
                id={`#issue${issue.title.slice(-1)}`}
              >
                <CenteredWrapper>
                  <IssueScreen issue={issue} />
                </CenteredWrapper>
              </Section>
            ))}
          </Wrapper>
        );
      }}
    />
  );
};

const Wrapper = styled.main``;

const Section = styled.section``;

const CenteredWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default FullpageIssueScreen;

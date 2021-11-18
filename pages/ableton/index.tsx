import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/components/ableton/Layout";
import MaxWidthWrapper from "@/components/ableton/MaxWidthWrapper";
import { HeadingOne } from "@/components/ableton/Headings";
import Paragraph from "@/components/ableton/Paragraph";
import Header from "@/components/ableton/Header";
import SubHeader from "@/components/ableton/SubHeader";
import { BigPictureColumn, TextColumn } from "@/components/ableton/Grid";
import { Ableton } from "@/components/ableton/Assets";
import styled from "styled-components";
import YellowRow from "@/components/ableton/YellowRow";
import CyanRow from "@/components/ableton/CyanRow";
import PurpleRow from "@/components/ableton/PurpleRow";
import BlueRow from "@/components/ableton/BlueRow";
import Footer from "@/components/ableton/Footer";
import Video from "@/components/ableton/Video";
import { QUERIES } from "@/components/ableton/constants";
import Delaration from "@/components/Delaration";

const Home: NextPage = () => {
  return (
    <Layout>
      <MaxWidthWrapper>
        <Header />
        <SubHeader />

        <Main>
          <BigPictureColumn>
            <Image
              src="/images/ableton/hero-image.jpeg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <HeroTextWrapper>
              <Ableton />
            </HeroTextWrapper>
          </BigPictureColumn>

          <TextColumn>
            <HeadingOne>
              We make{" "}
              <Link href="/ableton">
                <a>Live</a>
              </Link>
              ,{" "}
              <Link href="/ableton">
                <a>Push</a>
              </Link>{" "}
              and{" "}
              <Link href="/ableton">
                <a>Link</a>
              </Link>{" "}
              — unique software and hardware for music creation and performance.
              With these products, our community of users creates amazing
              things.
            </HeadingOne>
            <Paragraph>
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </Paragraph>
          </TextColumn>

          <YellowRow />

          <TextColumn>
            <HeadingOne>
              Making music isn’t easy. It takes time, effort, and learning. But
              when you’re in the flow, it’s incredibly rewarding.
            </HeadingOne>
            <Paragraph>
              We feel the same way about making Ableton products. The driving
              force behind Ableton is our passion for what we make, and the
              people we make it for.
            </Paragraph>
          </TextColumn>

          <Video />

          <TextColumn>
            <HeadingOne>
              We are more than 350 people from 30 different countries divided
              between our headquarters in Berlin and our offices in Los Angeles
              and Tokyo.
            </HeadingOne>
            <Paragraph>
              Most of us are active musicians, producers, and DJs, and many of
              us use Live and Push every day. We come from a wide range of
              cultural and professional backgrounds. Some of us have PhDs, some
              are self-taught, and most of us are somewhere in between. What
              connects us is the shared belief that each of us has the skills
              and knowledge to contribute to something big: helping to shape the
              future of music culture.
            </Paragraph>
          </TextColumn>

          <CyanRow />

          <TextColumn>
            <HeadingOne>
              We believe it takes focus to create truly outstanding instruments.
              We only work on a few products and we strive to make them great.
            </HeadingOne>
            <Paragraph>
              Rather than having a one-size-fits-all process, we try to give our
              people what they need to work their magic and grow. We’ve learned
              that achieving the best results comes from building teams that are
              richly diverse, and thus able to explore problems from a wider set
              of perspectives. We don’t always agree with each other, but
              opinion and debate are valued and openly encouraged.
            </Paragraph>
          </TextColumn>

          <BigPictureColumn>
            <Image
              src="/images/ableton/poster-meet-the-makers.jpeg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </BigPictureColumn>

          <TextColumn>
            <HeadingOne>
              We’re passionate about what we do, but we’re equally passionate
              about improving who we are.
            </HeadingOne>
            <Paragraph>
              We work hard to foster an environment where people can grow both
              personally and professionally, and we strive to create a wealth of
              opportunities to learn from and with each other.
            </Paragraph>
            <Paragraph>
              Alongside an internal training program, employees are actively
              supported in acquiring new knowledge and skills, and coached on
              applying these in their daily work. In addition, staff-organized
              development and music salons are a chance to discuss new
              technologies, production techniques and best practices.
            </Paragraph>
          </TextColumn>

          <PurpleRow />

          <TextColumn>
            <HeadingOne>
              We want our employees to love it here. Since we’re looking for
              exceptional talent from around the world, we will do everything we
              can to make your transition as easy as possible.
            </HeadingOne>
            <Paragraph>
              If you&apos;re joining us in Berlin, we&apos;ll help with
              relocation and paperwork. We&apos;ll even provide you with free
              German or English lessons. Plus, working in Germany means you can
              expect comprehensive health insurance for you and your family, as
              well as generous maternity and paternity leave. Office hours are
              flexible, but it’s not all work; we have several company and team
              outings throughout the year as well as a variety of fun, informal
              small-group activities.
            </Paragraph>
          </TextColumn>

          <BlueRow />
        </Main>

        <Footer />
      </MaxWidthWrapper>
      <Delaration text="Ableton about page" href="https://www.ableton.com" />
    </Layout>
  );
};

const Main = styled.main`
  padding-bottom: 8.33rem;
`;

const HeroTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & svg {
    width: 100%;
    height: auto;
  }

  @media ${QUERIES.tabletAndSmaller} {
    width: 215px;
    height: 52px;
  }
`;

export default Home;

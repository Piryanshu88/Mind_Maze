import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <Box fontSize={"20px"} lineHeight="2rem">
      <Text>
        Welcome to our exciting quiz game! This game is designed to challenge
        your knowledge in various subjects and test your quick thinking skills.
        Whether you're a trivia buff or just looking for a fun and educational
        way to spend your time, this quiz game has something for everyone.
      </Text>
      <Text>
        In this game, you will be presented with a series of questions ranging
        from history and geography to science and pop culture. The questions
        will be multiple choice, and you will have a limited amount of time to
        select your answer.
      </Text>
      <Text>
        The game is suitable for players of all ages and skill levels. You can
        play solo or compete against your friends to see who can get the highest
        score. With a wide range of topics and constantly updated questions,
        you'll never run out of challenges.
      </Text>
    </Box>
  );
};

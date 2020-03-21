/**
 * Markdown Renderer CODUCT GmbH
 * Adrian Beckmann (adrian.beckmann@coduct.com)
 */

import React from "react";
import MarkdownRenderer from "react-native-markdown-renderer";
import { View } from "react-native";
import { generateStyleSheet, rules } from "../../../../helpers/markdownhelper";
import useTheme from "../../../../themes/useTheme";
import { IEduMarkdownProps } from "./IEduMarkdownProps";
import { isNotSpecial } from "./markdownHelper";
import EduSpecialMarkdown from "./EduSpecialMarkdown";

// ~custom~slider(path name)(path name)(path name)~custom~
// ~custom~image(path name)~custom~
// ~custom~video(path name)~custom~
// ~custom~articlelink(id)~custom~

const EduMarkdown: React.FC<IEduMarkdownProps> = ({
  markdown,
  horizontalMargin,
  bottomMargin
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        marginBottom: bottomMargin
      }}
    >
      {markdown.split(new RegExp("~[cC]ustom~")).map(markdownSection =>
        isNotSpecial(markdownSection) ? (
          <View style={{ marginHorizontal: horizontalMargin || 0 }}>
            <MarkdownRenderer rules={rules} style={generateStyleSheet(theme)}>
              {markdownSection}
            </MarkdownRenderer>
          </View>
        ) : (
          <EduSpecialMarkdown
            markdown={markdownSection}
            horizontalMargin={horizontalMargin || 0}
          />
        )
      )}
    </View>
  );
};

export default EduMarkdown;

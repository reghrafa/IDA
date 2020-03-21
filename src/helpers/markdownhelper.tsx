import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Check from "../assets/images/Check";
import { hasParents } from "react-native-markdown-renderer";
import EduImage from "../ui/components/atomic/image/EduImage";
import { IEdubaoTheme } from "../themes/IEdubaoTheme";

export const generateStyleSheet = (theme: IEdubaoTheme) =>
  StyleSheet.create({
    paragraph: {
      marginTop: theme.grid.gridFactor(0.5),
      marginBottom: theme.grid.gridFactor(0.5)
    },
    text: {
      color: theme.colors.bluefont,
      fontSize: theme.typography.size.smaller14
    },
    heading: {
      color: theme.colors.primary,
      fontSize: theme.typography.size.large21,
      marginTop: theme.grid.gridFactor(1.5),
      marginBottom: theme.grid.gridFactor(0.5)
    },
    heading1: {
      color: theme.colors.primary,
      fontSize: theme.typography.size.large21,
      marginTop: theme.grid.gridFactor(1.5),
      marginBottom: theme.grid.gridFactor(0.5)
    },
    heading2: {
      color: theme.colors.primary,
      fontSize: theme.typography.size.normal18,
      marginTop: theme.grid.gridFactor(1),
      marginBottom: theme.grid.gridFactor(0.5)
    },
    heading3: {
      color: theme.colors.primary,
      fontSize: theme.typography.size.small16,
      marginTop: 0,
      marginBottom: theme.grid.gridFactor(0.5)
    },
    heading6: {
      color: theme.colors.primary,
      fontSize: theme.typography.size.smallest12,
      marginTop: 0,
      marginBottom: theme.grid.gridFactor(0.5)
    },
    listUnordered: {
      color: theme.colors.bluefont,
      fontSize: theme.typography.size.smaller14,
      marginVertical: 8
    },
    listUnorderedItem: {
      flex: 1,
      flexDirection: "row",
      minHeight: theme.grid.gridFactor(2)
    },
    listUnorderedItemIcon: {
      width: theme.grid.gridFactor(1),
      height: theme.grid.gridFactor(1),
      marginTop: theme.grid.gridFactor(0.5),
      marginBottom: theme.grid.gridFactor(0.5),
      marginRight: theme.grid.gridFactor(1)
    },
    listUnorderedItemText: {
      margin: 0,
      padding: 0,
      height: theme.grid.gridFactor(1)
    },
    listOrdered: {
      color: theme.colors.bluefont,
      fontSize: theme.typography.size.smaller14,
      marginVertical: 8
    },
    listOrderedItem: {
      flex: 1,
      flexDirection: "row",
      minHeight: theme.grid.gridFactor(2)
    },
    listOrderedItemIcon: {
      fontWeight: "bold",
      color: theme.colors.bluefont,
      width: theme.grid.gridFactor(1),
      height: theme.grid.gridFactor(1),
      marginTop: theme.grid.gridFactor(0.5),
      marginBottom: theme.grid.gridFactor(0.5),
      marginRight: theme.grid.gridFactor(1)
    },
    listOrderedItemText: {
      margin: 0,
      padding: 0,
      height: theme.grid.gridFactor(1)
    }
  });

export const rules = {
  list_item: (node: any, children: any, parent: any, styles: any) => {
    if (hasParents(parent, "bullet_list")) {
      return (
        <View key={node.key} style={styles.listUnorderedItem}>
          <View style={styles.listUnorderedItemIcon}>
            <Check
              width={styles.listUnorderedItemIcon.width}
              height={styles.listUnorderedItemIcon.height}
              color="#1E3056"
            />
          </View>
          <View style={[styles.listItem]}>{children}</View>
        </View>
      );
    }

    if (hasParents(parent, "ordered_list")) {
      return (
        <View key={node.key} style={styles.listOrderedItem}>
          <Text style={styles.listOrderedItemIcon}>
            {node.index + 1 + "."}
            {node.markup}
          </Text>
          <View style={[styles.listItem]}>{children}</View>
        </View>
      );
    }

    return (
      <View key={node.key} style={[styles.listItem]}>
        {children}
      </View>
    );
  },
  image: (node: any, children: any, parent: any, styles: any) => {
    return (
      <EduImage noMargin key={node.key} source={{ uri: node.attributes.src }} />
    );
  }
};

/*
root
view
codeBlock
codeInline
del
em
headingContainer
heading
heading1
heading2
heading3
heading4
heading5
heading6
hr
blockquote
inlineCode
list
listItem
listUnordered
listUnorderedItem
listUnorderedItemIcon
listUnorderedItemText
listOrdered
listOrderedItem
listOrderedItemIcon
listOrderedItemText
paragraph
hardbreak
strong
table
tableHeader
tableHeaderCell
text
strikethrough
link
blocklink
u
image
 */

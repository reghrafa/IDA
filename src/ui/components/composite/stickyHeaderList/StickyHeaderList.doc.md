# Sticky Header List

A sticky header list consist of two parts/components:

1. The sticky header, which will be rendered always above the scroll area.

The sticky header will be passed via the `header` property. Here you have to define a functional component with a `opacity` property.
This opacity property will be used to set the opacity of the header text. The header text will become visible when the defined component
of the content will leave the screen.

2. The scroll area where the content goes in

The scroll area will be passed via the `children` property. Here you have to define a functional component with a `onLayout` property.
This onLayout property you have to pass to the onLayout property of the element which is the indicator for the headline to appear.

## Sample use:

```

<StickyHeaderList header={(opacity): JSX.Element => (
    <View style={{flexDirection: 'row'}}>
    <BackArrow />
    <Text style={{opacity}}>{title}</Text>
    </View>
)}
>
    {(onLayout): JSX.Element => (
    <>
        <HeadlineWithCategory
        style={{
            marginHorizontal: 32, paddingVertical: 16
        }}
        headlineOnLayout={onLayout}
        category={category}
        >
        {title}
        </HeadlineWithCategory>
        {children}
    </>
    )}
</StickyHeaderList>

```
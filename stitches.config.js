import { createStitches } from '@stitches/react';
import {
    gray,
    blue,
    red,
    green,
    purple,
    violet,
    orange,
    blackA,
    black,
    mauve,
    whiteA,
    grayA,
    redA,
    tomato,
    violetA,
    orangeA
} from '@radix-ui/colors';




export const { styled, getCssText, keyframes } = createStitches({
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
      },
    theme: {
        colors: {
            ...gray,
            ...blue,
            ...red,
            ...redA,
            ...green,
            ...violet,
            ...purple,
            ...blackA,
            ...whiteA,
            ...grayA,
            ...orange,
            ...orangeA,
            ...violetA,
            ...mauve,
            ...black
        },
        fonts: {
            sans: 'Inter, sans-serif',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        radii: {
            1: '3px',
            2: '5px',
            3: '7px',
            4: '10px',
            5: '14px',
            round: '50%',
            pill: '9999px',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
    utils: {
        p: (value) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        m: (value) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),

        ta: (value) => ({ textAlign: value }),

        fd: (value) => ({ flexDirection: value }),
        fw: (value) => ({ flexWrap: value }),

        ai: (value) => ({ alignItems: value }),
        ac: (value) => ({ alignContent: value }),
        jc: (value) => ({ justifyContent: value }),
        as: (value) => ({ alignSelf: value }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({ flexShrink: value }),
        fb: (value) => ({ flexBasis: value }),

        bc: (value) => ({
            backgroundColor: value,
        }),

        br: (value) => ({
            borderRadius: value,
        }),
        btrr: (value) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value,
        }),

        bs: (value) => ({ boxShadow: value }),

        lh: (value) => ({ lineHeight: value }),

        ox: (value) => ({ overflowX: value }),
        oy: (value) => ({ overflowY: value }),

        pe: (value) => ({ pointerEvents: value }),
        us: (value) => ({ WebkitUserSelect: value, userSelect: value }),

        size: (value) => ({
            width: value,
            height: value,
        }),

        linearGradient: (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),

        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },

});



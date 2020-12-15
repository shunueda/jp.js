interface Tree {
    [key: string]: Tree | string;
}

export const TREE: Tree = {
    a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
    k: {
        a: 'か', i: 'き', u: 'く', e: 'け', o: 'こ',
        y: { a: 'きゃ', i: 'きぃ', u: 'きゅ', e: 'きぇ', o: 'きょ' },
    },
    s: {
        a: 'さ', i: 'し', u: 'す', e: 'せ', o: 'そ',
        h: { a: 'しゃ', i: 'し', u: 'しゅ', e: 'しぇ', o: 'しょ' },
        y: { a: 'きゃ', i: 'きぃ', u: 'きゅ', e: 'きぇ', o: 'きょ' },
    },
    t: {
        a: 'た', i: 'ち', u: 'つ', e: 'て', o: 'と',
        h: { a: 'てゃ', i: 'てぃ', u: 'てゅ', e: 'てぇ', o: 'てょ' },
        y: { a: 'ちゃ', i: 'ちぃ', u: 'ちゅ', e: 'ちぇ', o: 'ちょ' },
        s: { a: 'つぁ', i: 'つぃ', u: 'つ', e: 'つぇ', o: 'つぉ' },
    },
    c: {
        a: 'か', i: 'し', u: 'く', e: 'せ', o: 'こ',
        h: { a: 'ちゃ', i: 'ち', u: 'ちゅ', e: 'ちぇ', o: 'ちょ' },
        y: { a: 'ちゃ', i: 'ちぃ', u: 'ちゅ', e: 'ちぇ', o: 'ちょ' },
    },
    q: {
        a: 'くぁ', i: 'くぃ', u: 'く', e: 'くぇ', o: 'くぉ',
    },
    n: {
        a: 'な', i: 'に', u: 'ぬ', e: 'ね', o: 'の', n: 'ん',
        y: { a: 'にゃ', i: 'にぃ', u: 'にゅ', e: 'にぇ', o: 'にょ' },
    },
    h: {
        a: 'は', i: 'ひ', u: 'ふ', e: 'へ', o: 'ほ',
        y: { a: 'ひゃ', i: 'ひぃ', u: 'ひゅ', e: 'ひぇ', o: 'ひょ' },
    },
    f: {
        a: 'ふぁ', i: 'ふぃ', u: 'ふ', e: 'ふぇ', o: 'ふぉ',
        y: { a: 'ふゃ', u: 'ふゅ', o: 'ふょ' },
    },
    m: {
        a: 'ま', i: 'み', u: 'む', e: 'め', o: 'も',
        y: { a: 'みゃ', i: 'みぃ', u: 'みゅ', e: 'みぇ', o: 'みょ' },
    },
    y: { a: 'や', i: 'い', u: 'ゆ', e: 'いぇ', o: 'よ' },
    r: {
        a: 'ら', i: 'り', u: 'る', e: 'れ', o: 'ろ',
        y: { a: 'りゃ', i: 'りぃ', u: 'りゅ', e: 'りぇ', o: 'りょ' },
    },
    w: { a: 'わ', i: 'うぃ', u: 'う', e: 'うぇ', o: 'を' },
    g: {
        a: 'が', i: 'ぎ', u: 'ぐ', e: 'げ', o: 'ご',
        y: { a: 'ぎゃ', i: 'ぎぃ', u: 'ぎゅ', e: 'ぎぇ', o: 'ぎょ' },
    },
    z: {
        a: 'ざ', i: 'じ', u: 'ず', e: 'ぜ', o: 'ぞ',
        y: { a: 'じゃ', i: 'じぃ', u: 'じゅ', e: 'じぇ', o: 'じょ' },
    },
    j: {
        a: 'じゃ', i: 'じ', u: 'じゅ', e: 'じぇ', o: 'じょ',
        y: { a: 'じゃ', i: 'じぃ', u: 'じゅ', e: 'じぇ', o: 'じょ' },
    },
    d: {
        a: 'だ', i: 'ぢ', u: 'づ', e: 'で', o: 'ど',
        h: { a: 'でゃ', i: 'でぃ', u: 'でゅ', e: 'でぇ', o: 'でょ' },
        y: { a: 'ぢゃ', i: 'ぢぃ', u: 'ぢゅ', e: 'ぢぇ', o: 'ぢょ' },
    },
    b: {
        a: 'ば', i: 'び', u: 'ぶ', e: 'べ', o: 'ぼ',
        y: { a: 'びゃ', i: 'びぃ', u: 'びゅ', e: 'びぇ', o: 'びょ' },
    },
    v: {
        a: 'う゛ぁ', i: 'う゛ぃ', u: 'う゛', e: 'う゛ぇ', o: 'う゛ぉ',
        y: { a: 'う゛ゃ', i: 'う゛ぃ', u: 'う゛ゅ', e: 'う゛ぇ', o: 'う゛ょ' },
    },
    p: {
        a: 'ぱ', i: 'ぴ', u: 'ぷ', e: 'ぺ', o: 'ぽ',
        y: { a: 'ぴゃ', i: 'ぴぃ', u: 'ぴゅ', e: 'ぴぇ', o: 'ぴょ' },
    },
    x: {
        a: 'ぁ', i: 'ぃ', u: 'ぅ', e: 'ぇ', o: 'ぉ',
        y: {
            a: 'ゃ', i: 'ぃ', u: 'ゅ', e: 'ぇ', o: 'ょ',
        },
        t: {
            u: 'っ',
            s: {
                u: 'っ',
            },
        },
    },
    l: {
        a: 'ぁ', i: 'ぃ', u: 'ぅ', e: 'ぇ', o: 'ぉ',
        y: {
            a: 'ゃ', i: 'ぃ', u: 'ゅ', e: 'ぇ', o: 'ょ',
        },
        t: {
            u: 'っ',
            s: {
                u: 'っ',
            },
        },
    },
};
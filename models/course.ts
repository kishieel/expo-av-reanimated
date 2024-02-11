export type CourseDocument = {
    content: {
        text: string;
        ssml: string;
        audio: string;
    };
    effects: Record<string, Effect>;
    taskRefs: string[];
}

export type Effect =
    | { type: 'DRAW_UPPERCASE'; time: number; videoId: string; }
    | { type: 'DRAW_LOWERCASE'; time: number; videoId: string; }
    | { type: 'SHOW_EXAMPLE'; time: number; text: string }

// @fixture
export const course: CourseDocument = {
    content: {
        text: 'Lorem ipsum dolor sit amet...',
        ssml: '<speak>Lorem ipsum dolor sit amet...</speak>',
        audio: 'audio/GGwRunJsNxHOgg8sSUKG.mp3'
    },
    effects: {
        'NByVKUSdYCTe2baogNqT': {
            type: 'DRAW_UPPERCASE',
            time: 14691,
            videoId: 'video/zbDHnfuYfE3ZmHdYzOGf.mp4'
        },
        '1OEU2WQp5H09oWl5jsrB': {
            type: 'DRAW_LOWERCASE',
            time: 25789,
            videoId: 'video/kiwfhTLcaXbVIICXTKVN.mp4'
        },
        'tx5WfCvoDGiun8xXqbnb': {
            type: 'SHOW_EXAMPLE',
            time: 37537,
            text: 'Arbuz'
        },
        'pUshG7GiuWCJ5ExWPCB3': {
            type: 'SHOW_EXAMPLE',
            time: 38795,
            text: 'Anioł'
        },
        'UTJ7fnQpHo1rj1gD7FRB': {
            type: 'SHOW_EXAMPLE',
            time: 39832,
            text: 'Agrafka'
        },
    },
    taskRefs: []
}

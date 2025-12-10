export interface PostInterface {
    path: string,
    metadata: {
        title: string,
        description: string,
        date: string,
        image: any,
        tags: [],
        isHighlight: boolean,
    }
}
export type Photo = {
  id: string;
  width: string;
  height: string;
  alt: string;
  src: {
    large: string;
  };
};

export type PhotoResponse = {
    per_page: number;
    page: number;
    photos: Photo[];
    total_results: number;
    next_page?: string;
    prev_page?: string;
}

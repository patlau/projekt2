export class Show {
  title: string;    // Title of the show
  user?: string;    // User who created the show
  date?: string;    // Date of the show in ISO format for storing in database
  ts?: number;      // Timestamp the show was created
  sortKey?: number; // Special sort key for Firebase for sorting by descending date
}



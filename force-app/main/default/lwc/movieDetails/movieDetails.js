import { LightningElement, api, wire } from 'lwc';
import getMoviesDetails from '@salesforce/apex/IMDBController.getMoviesDetails';

export default class MovieDetails extends LightningElement {
    _movieId = '';
    movieDetails = null;
    isLoading = true;
    @api
    get movieId() {
        return this._movieId;
    }

    set movieId(value) {
        if (value) {
            this.isLoading = true;
        }
        this._movieId = value;
    }

    @wire(getMoviesDetails, { movieId: '$movieId' })
    wiredGetMovieDetails(result) {
        if (result.data) {
            this.movieDetails = JSON.parse(result.data).result;
        }
        else if (result.error) {
            console.log('Error occured while searching movies -' + result.error);
        }
        this.isLoading = false;
    }

    get showMovieContent() {
        return (!this.isLoading) && this.movieId;
    }

}
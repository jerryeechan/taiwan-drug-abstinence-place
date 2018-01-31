class AgencyDataLoader{
    data:[any]
    constructor()
    {
        var publicSpreadsheetUrl ='https://docs.google.com/spreadsheets/d/1dtw1b7XKx6y8VdusKTvCZd4Fp19yMZWTHO9t1QJQ5SE/pubhtml'
        //var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1nJ9TZe3hxscYtrdq7r9l2LB-U-iFd9tF0VwOoBTEdMw/pubhtml';

        Tabletop.init( { key: publicSpreadsheetUrl,
                        callback: this.showInfo,
                        simpleSheet: true} )
        //window.addEventListener('DOMContentLoaded', init)
        //this.data = JSON.parse(data_string);
        
    }
    showInfo(_data, tabletop) {
        this.data = _data;
        holdData = _data;
        console.log(this.data.length);
        console.log(this.data);
    }
}
var holdData;
var dataLoader = new AgencyDataLoader();
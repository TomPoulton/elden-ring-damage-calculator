class UIFilters {
    
    constructor(filtersDivID) {
        this.filtersDiv = $(`#${filtersDivID}`);
        this.addFiltersToPage();
    }

    addFiltersToPage() {
        throw 'Not implemented on base class'
    }

    filter(weapons) {
        throw 'Not implemented on base class'
    }

    toFilterID(filter) {
        return `${filter.split(" ").join("")}Filter`;
    }
    
    addFilterTooltip(filterDiv, tooltip) {
        if (tooltip) {
            filterDiv.append(`<span data-bs-toggle="tooltip" title="${tooltip}">  ${Icons.help}</span>`);
        }
    }

    addFilterToPage(filter, label, checked, tooltip = null) {
        let filterID = this.toFilterID(filter);
        let checkedString = (checked) ? 'checked="checked"' : '';
        let filterDiv = $('<div class="form-check form-switch"></div>');
        filterDiv.append(`<input class="form-check-input" type="checkbox" id="${filterID}" ${checkedString}/>`);
        filterDiv.append(`<label class="form-check-label" for="${filterID}">${label}</label>`);
        this.addFilterTooltip(filterDiv, tooltip);
        this.filtersDiv.append(filterDiv);
    }

    isFilterChecked(filterID) {
        return $(`#${filterID}`).prop('checked');
    }

    getFilters(filterOptions) {
        return filterOptions.filter(filterOption => {
            return (this.isFilterChecked(this.toFilterID(filterOption)));
        });
    }
}

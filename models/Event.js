class Event {
    constructor(id, userId, type, title, description, imageUrl, startDate, endDate,
    location, organization) {
        this.id = id;
        this.userId = userId; //
        this.type = type;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organization = organization;
    }
}

export default Event;

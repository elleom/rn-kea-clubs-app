class Event {
    constructor(id, type, title, description, image, startDate, endDate,
    location, organization, thumbnail) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.description = description;
        this.image = image;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organization = organization;
        this.thumbnail = thumbnail;
    }
}

export default Event;
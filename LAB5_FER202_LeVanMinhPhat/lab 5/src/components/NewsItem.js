import Card from "react-bootstrap/Card";

function NewsItem({ news }) {
    return (
        <Card className="mb-4">

            <Card.Img
                variant="top"
                src={news.images}
            />

            <Card.Body>

                <Card.Title>
                    {news.title}
                </Card.Title>

                <Card.Text>
                    {news.description}
                </Card.Text>

            </Card.Body>

        </Card>
    );
}

export default NewsItem;
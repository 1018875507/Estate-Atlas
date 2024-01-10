package entity;

public class regional_house {
    private String city;
    private String year;
    private double price;
    private double area;
    private double revenue;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public double getRevenue() {
        return revenue;
    }

    public void setRevenue(double revenue) {
        this.revenue = revenue;
    }

    @Override
    public String toString() {
        return "regional_house{" +
                "city='" + city + '\'' +
                ", year='" + year + '\'' +
                ", price=" + price +
                ", area=" + area +
                ", revenue=" + revenue +
                '}';
    }
}

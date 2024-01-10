package entity;

public class business_operations {
    private String business;
    private String year;
    private double number;

    public String getBusiness() {
        return business;
    }

    public void setBusiness(String business) {
        this.business = business;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public double getNumber() {
        return number;
    }

    public void setNumber(double number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "business_operations{" +
                "businiss='" + business + '\'' +
                ", year='" + year + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
}

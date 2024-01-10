package entity;

public class house_complete_rate {
    private String city;
    private String year;
    private double constructed;
    private double  completed;
    private  double rate;

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

    public double getConstructed() {
        return constructed;
    }

    public void setConstructed(double constructed) {
        this.constructed = constructed;
    }

    public double getCompleted() {
        return completed;
    }

    public void setCompleted(double completed) {
        this.completed = completed;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "house_complete_rate{" +
                "city='" + city + '\'' +
                ", year='" + year + '\'' +
                ", constructed=" + constructed +
                ", completed=" + completed +
                ", rate=" + rate +
                '}';
    }
}

package entity;

public class assets_liabilities {
    private String year;
    private double number;

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
        return "assets_liabilities{" +
                "year='" + year + '\'' +
                ", number=" + number +
                '}';
    }
}

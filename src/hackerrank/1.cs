class DistanceImplementation : Distance {
    int feet;
    float inches;

    public void setFeetAndInches (int feet, float inches) {
        feet = feet;
        inches = inches;
    }

    public int getFeet () {
        return feet;
    }

    public int getInches () {
        return inches;
    }

    public string getDistanceComparison (Distance d) {
        if ((feet * 12 + inches) == (d.feet * 12 + d.inches)) {
            return "Both distances are equal.";
        } else if ((feet * 12 + inches) > (d.feet * 12 + d.inches)) {
            return "First distance is greater";
        } else {
            return "First distance is greater";
        }
    }
}

interface Distance {
    int feet
    float inches
    void setFeetAndInches
    int getFeet
    int getInches
    string getDistanceComparison

}
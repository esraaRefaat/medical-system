import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // If using Expo for icons

const RatingComponent = ({ reviews }) => {
  // Calculate total ratings and average rating
  const totalRatings = reviews.length;
  const averageRating =
    totalRatings > 0
      ? reviews.reduce((acc, review) => acc + review.stars, 0) / totalRatings
      : 0;

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <MaterialIcons
            key={index}
            name={index < rating ? "star" : "star-border"}
            size={20}
            color="#FFD700"
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.ratingCountContainer}>
          <Text style={styles.ratingCount}>{totalRatings} ratings</Text>
        </View>
        <View style={styles.averageRatingContainer}>
          {totalRatings > 0 ? (
            <>
              {renderStars(Math.round(averageRating))}
              <Text style={styles.averageRating}>
                {" "}
                {averageRating.toFixed(1)}
              </Text>
            </>
          ) : (
            <Text style={styles.noRatings}>No ratings yet</Text>
          )}
        </View>
      </View>

      <ScrollView>
        {reviews.map((item, index) => (
          <View key={index}>
            <View style={styles.reviewContainer}>
              <Image
                source={
                  item.profilePicture
                    ? { uri: item.profilePicture }
                    : require("../../assets/defaultAvatar.jpg")
                }
                style={styles.profilePicture}
              />
              <View style={styles.reviewDetails}>
                <Text style={styles.reviewerName}>{item.name}</Text>
                <View style={styles.starsContainer}>
                  {renderStars(item.stars)}
                </View>
                <Text style={styles.reviewDate}>{item.date}</Text>
                <Text style={styles.reviewText}>{item.description}</Text>
              </View>
            </View>

            {/* Separator */}
            {index < totalRatings - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 3,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  ratingCountContainer: {
    flex: 1,
  },
  ratingCount: {
    fontSize: 16,
    color: "#333",
  },
  averageRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  averageRating: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  noRatings: {
    fontSize: 16,
    color: "#999",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1,
  },
  reviewerName: {
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: "#888",
  },
  reviewText: {
    fontSize: 14,
    color: "#333",
  },
  separator: {
    height: 1, // Height of the separator
    backgroundColor: "#e0e0e0", // Light grey color for subtlety
    marginVertical: 10, // Spacing around the separator
  },
});


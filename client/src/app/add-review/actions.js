"use server";

export async function fetchRecentDrivers() {
  try {
    // TODO: post req to endpoints when they are implemented
    // we want to fetch the last three drivers the user had
    const lastThreeDrivers = [
      { name: "Sam R." },
      { name: "John D." },
      { name: "Jane S." },
    ];
    return lastThreeDrivers;
  } catch (error) {
    throw error;
  }
}

export async function postReview(formData) {
  // TODO: post req to endpoint when its implemented
  // want to push this review to mongo

  try {
    return { status: 200 };
  } catch (error) {
    throw error;
  }
}

function postmessage() {
    var exercises = ["Calf raises", "Squating calf raises", "single-leg calf-raises", "stiff ankle hops", "wall sits", "sumo squats", "air squats", "step-ups"];
    var exercise = exercises[Math.floor(Math.random() * exercises.length)];
    document.getElementbyId("exercise").textContent = exercise;
}

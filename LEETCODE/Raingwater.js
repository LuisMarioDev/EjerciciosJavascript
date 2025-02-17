

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
function TrappingRainWater() {
    let height = [0,1,0,2,1,0,1,3,2,1,2,1];
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    
    return result;
}
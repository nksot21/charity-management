import React from 'react'

export default function Donation(props) {
  return (
    <div  id={props.id}>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="love"><path fill={props.color} d="M471.089 131.554a8 8 0 0 0-8.68-6.709 36.046 36.046 0 0 0-32.543 37.635l1.44 58.937a45.258 45.258 0 0 0-36.369 25.553L373.4 292.191a51.822 51.822 0 0 1-14.292 18.049l-4.476 3.59a90.925 90.925 0 0 0-34.118 75.234l-8.8-4.19a8 8 0 0 0-10.663 3.783l-23.616 49.588a8 8 0 0 0 3.782 10.662l108.817 51.825A8 8 0 0 0 400.7 496.95l23.616-49.588a8 8 0 0 0-3.782-10.663l-2.9-1.379-2.932-16.711a23.416 23.416 0 0 1 5.349-16.373l56.352-68.191q.17-.207.326-.424a93.5 93.5 0 0 0 17.48-55.673 8.079 8.079 0 0 0-.1-1.13zM389.694 482.847L295.323 437.9l16.737-35.143 94.371 44.946zm74.2-158.783l-56.177 67.98a39.345 39.345 0 0 0-8.946 28.125 7.688 7.688 0 0 0 .1.787l1.039 5.922L337.4 397.105a75.026 75.026 0 0 1 27.242-70.793l4.476-3.588a67.925 67.925 0 0 0 18.728-23.653l21.537-45.221a29.278 29.278 0 0 1 31.275-16.27L409.169 303.7a8 8 0 1 0 14.445 6.88l35.4-74.333a8 8 0 0 0-3.783-10.662 45.256 45.256 0 0 0-7.891-2.886l-1.483-60.7c0-.069 0-.139-.008-.208a20.071 20.071 0 0 1 10.838-18.875l21.532 135.838A77.426 77.426 0 0 1 463.9 324.064zM210.946 388.657a8 8 0 0 0-10.663-3.783l-8.8 4.19a90.928 90.928 0 0 0-34.118-75.235l-4.477-3.589A51.831 51.831 0 0 1 138.6 292.191L117.063 246.97a45.259 45.259 0 0 0-36.369-25.553l1.44-58.937a36.046 36.046 0 0 0-32.543-37.635 8 8 0 0 0-8.68 6.709L17.885 276.818a8.079 8.079 0 0 0-.1 1.13 93.5 93.5 0 0 0 17.48 55.673q.156.218.326.424l56.352 68.191a23.416 23.416 0 0 1 5.349 16.373L94.362 435.32l-2.9 1.379a8 8 0 0 0-3.782 10.663L111.3 496.95a8 8 0 0 0 10.663 3.782L230.78 448.907a8 8 0 0 0 3.782-10.662zm-106.667 3.387L48.1 324.064a77.426 77.426 0 0 1-14.323-45.317L55.311 142.909a20.071 20.071 0 0 1 10.838 18.875c0 .069-.006.139-.008.208l-1.483 60.7a45.175 45.175 0 0 0-7.891 2.886 8 8 0 0 0-3.783 10.662l35.4 74.333a8 8 0 1 0 14.445-6.88L71.343 237.58a29.278 29.278 0 0 1 31.275 16.27l21.537 45.221a67.925 67.925 0 0 0 18.728 23.653l4.476 3.588A75.026 75.026 0 0 1 174.6 397.105l-62.513 29.773 1.039-5.922a7.688 7.688 0 0 0 .1-.787A39.345 39.345 0 0 0 104.279 392.044zm18.027 90.8l-16.737-35.142 94.371-44.946L216.677 437.9zM251.547 162.811a12.864 12.864 0 0 0 8.9 0c.159-.054.317-.112.472-.175 63.723-25.817 85.24-73.465 78.3-109.234l-.011-.058c-5.2-25.8-24.016-42.47-47.922-42.47-11.326 0-23.406 3.961-35.216 11.505C244.115 14.486 232.179 10.49 220.52 10.49c-24.059 0-42.8 16.857-47.746 42.929-6.935 36.148 14.6 83.944 78.355 109.239C251.267 162.712 251.406 162.764 251.547 162.811zM188.491 56.417c3.5-18.459 15.774-29.927 32.029-29.927 9.532 0 20.146 4.159 30.693 12.028a8 8 0 0 0 9.483.063c10.552-7.659 21.128-11.707 30.586-11.707 16.189 0 28.538 11.344 32.232 29.607 7.808 40.33-28.118 74.569-67.53 90.886C201.543 125.361 182.831 85.92 188.491 56.417z"></path><path  fill={props.color}d="M344.668 254.328c.14.055.281.107.424.154a11.093 11.093 0 0 0 7.519 0q.24-.079.474-.175c19.148-7.758 34.076-19.245 43.17-33.222 8.262-12.7 11.4-26.945 8.845-40.122l-.012-.057c-3.624-17.963-16.8-29.57-33.579-29.57-7.314 0-15.035 2.361-22.587 6.87-7.638-4.726-15.305-7.116-22.854-7.116-16.888 0-30.028 11.739-33.471 29.89C287.922 205.35 302.209 237.481 344.668 254.328zm-36.354-70.35c2.006-10.576 8.643-16.889 17.754-16.889 5.5 0 11.724 2.474 18 7.156a8 8 0 0 0 9.483.062c6.2-4.495 12.573-6.972 17.96-6.972 8.948 0 15.8 6.4 17.889 16.7 3.355 17.374-7.939 40.838-40.566 54.709C316.214 225.153 304.937 201.583 308.314 183.978zM185.8 151.335c-7.314 0-15.035 2.361-22.587 6.87-7.638-4.726-15.305-7.116-22.854-7.116-16.889 0-30.028 11.739-33.47 29.89-4.676 24.371 9.611 56.5 52.071 73.349q.209.083.42.153a11.1 11.1 0 0 0 7.52 0c.16-.053.32-.112.477-.176 19.148-7.758 34.075-19.245 43.169-33.222 8.262-12.7 11.4-26.945 8.845-40.122l-.012-.057C215.759 162.942 202.579 151.335 185.8 151.335zm-22.677 87.414c-32.619-13.6-43.9-37.166-40.518-54.771 2.006-10.576 8.643-16.889 17.754-16.889 5.5 0 11.724 2.474 18 7.156a8 8 0 0 0 9.483.062c6.194-4.495 12.572-6.972 17.959-6.972 8.947 0 15.8 6.4 17.889 16.7C207.048 201.413 195.754 224.878 163.127 238.749zM298.208 252.428l-.011-.058c-2.758-13.669-13.252-22.853-26.113-22.853a33.2 33.2 0 0 0-16.013 4.508 32.41 32.41 0 0 0-16.245-4.683c-12.955 0-23.421 9.291-26.041 23.1-3.5 18.239 7.014 42.216 38.388 54.664.14.056.283.108.426.155a10.19 10.19 0 0 0 6.8 0q.24-.081.474-.175C291.22 294.389 301.713 270.485 298.208 252.428zm-42.231 38.94c-21.263-9.2-28.665-24.509-26.475-35.925 1.2-6.325 5.059-10.1 10.324-10.1 3.4 0 7.338 1.6 11.389 4.619a8 8 0 0 0 9.483.062c4-2.905 8.047-4.506 11.386-4.506 5.257 0 9.151 3.733 10.423 9.989C284.673 266.759 277.249 282 255.977 291.368z"></path></svg>
    </div>
  )
}



# Refine live face tracking

## Goal
Make customer face boxes steadier and more reliable without slowing the live camera experience.

## Changes
- Tighten face acceptance using confidence, minimum size, valid frame bounds, and realistic face proportions.
- Replace simple nearest-point matching with motion-aware matching that compares predicted position, overlap, size, and distance.
- Smooth movement adaptively: suppress tiny frame-to-frame jitter while responding quickly to intentional movement.
- Improve track lifecycle so brief occlusion keeps the same customer number, while stale and duplicate tracks are removed safely.
- Require stronger confirmation before assigning a visible customer number and count a tripwire crossing only from a reliable continuous track.
- Keep processing capped for smooth browser performance and preserve the existing privacy behavior.

## Validation
- Run the project checks.
- Test camera startup and tracking states in the live dashboard where browser camera access is available.
- Confirm the rest of the dashboard remains unaffected.

## Technical details
- Extend each track with velocity, age, detection streak, and quality state.
- Use intersection-over-union plus normalized center and scale distance for one-to-one detection assignment.
- Clamp expanded boxes to the video frame and reject implausible detections before tracking.

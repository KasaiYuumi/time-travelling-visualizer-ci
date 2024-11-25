export class LabelRenderParams {
    constructor(pointIndices, labelStrings, scaleFactors, useSceneOpacityFlags, defaultFontSize, fillColors, strokeColors) {
        this.pointIndices = pointIndices;
        this.labelStrings = labelStrings;
        this.scaleFactors = scaleFactors;
        this.useSceneOpacityFlags = useSceneOpacityFlags;
        this.defaultFontSize = defaultFontSize;
        this.fillColors = fillColors;
        this.strokeColors = strokeColors;
    }
}
/** Details about the camera projection being used to render the scene. */
export var CameraType;
(function (CameraType) {
    CameraType[CameraType["Perspective"] = 0] = "Perspective";
    CameraType[CameraType["Orthographic"] = 1] = "Orthographic";
})(CameraType || (CameraType = {}));
/**
 * RenderContext contains all of the state required to color and render the data
 * set. ScatterPlot passes this to every attached visualizer as part of the
 * render callback.
 * TODO(@charlesnicholson): This should only contain the data that's changed between
 * each frame. Data like colors / scale factors / labels should be reapplied
 * only when they change.
 */
export class RenderContext {
    constructor(camera, cameraType, cameraTarget, screenWidth, screenHeight, nearestCameraSpacePointZ, farthestCameraSpacePointZ, backgroundColor, pointColors, pointScaleFactors, labels, polylineColors, polylineOpacities, polylineWidths) {
        this.camera = camera;
        this.cameraType = cameraType;
        this.cameraTarget = cameraTarget;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.nearestCameraSpacePointZ = nearestCameraSpacePointZ;
        this.farthestCameraSpacePointZ = farthestCameraSpacePointZ;
        this.backgroundColor = backgroundColor;
        this.pointColors = pointColors;
        this.pointScaleFactors = pointScaleFactors;
        this.labels = labels;
        this.polylineColors = polylineColors;
        this.polylineOpacities = polylineOpacities;
        this.polylineWidths = polylineWidths;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RlbnNvcmJvYXJkL3Byb2plY3Rvci9yZW5kZXJDb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1MsWUFBMEIsRUFDMUIsWUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsb0JBQStCLEVBQy9CLGVBQXVCLEVBQ3ZCLFVBQXNCLEVBQ3RCLFlBQXdCO1FBTnhCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBVztRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFZO0lBQzlCLENBQUM7Q0FDTDtBQUNELDBFQUEwRTtBQUMxRSxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHlEQUFXLENBQUE7SUFDWCwyREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBQ0Q7Ozs7Ozs7R0FPRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQ1MsTUFBb0IsRUFDcEIsVUFBc0IsRUFDdEIsWUFBMkIsRUFDM0IsV0FBbUIsRUFDbkIsWUFBb0IsRUFDcEIsd0JBQWdDLEVBQ2hDLHlCQUFpQyxFQUNqQyxlQUF1QixFQUN2QixXQUF5QixFQUN6QixpQkFBK0IsRUFDL0IsTUFBeUIsRUFDekIsY0FFTixFQUNNLGlCQUErQixFQUMvQixjQUE0QjtRQWY1QixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFRO1FBQ2hDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBUTtRQUNqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWM7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBRXBCO1FBQ00sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFjO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFjO0lBQ2xDLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE2IFRoZSBUZW5zb3JGbG93IEF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGNsYXNzIExhYmVsUmVuZGVyUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBvaW50SW5kaWNlczogRmxvYXQzMkFycmF5LFxuICAgIHB1YmxpYyBsYWJlbFN0cmluZ3M6IHN0cmluZ1tdLFxuICAgIHB1YmxpYyBzY2FsZUZhY3RvcnM6IEZsb2F0MzJBcnJheSxcbiAgICBwdWJsaWMgdXNlU2NlbmVPcGFjaXR5RmxhZ3M6IEludDhBcnJheSxcbiAgICBwdWJsaWMgZGVmYXVsdEZvbnRTaXplOiBudW1iZXIsXG4gICAgcHVibGljIGZpbGxDb2xvcnM6IFVpbnQ4QXJyYXksXG4gICAgcHVibGljIHN0cm9rZUNvbG9yczogVWludDhBcnJheVxuICApIHt9XG59XG4vKiogRGV0YWlscyBhYm91dCB0aGUgY2FtZXJhIHByb2plY3Rpb24gYmVpbmcgdXNlZCB0byByZW5kZXIgdGhlIHNjZW5lLiAqL1xuZXhwb3J0IGVudW0gQ2FtZXJhVHlwZSB7XG4gIFBlcnNwZWN0aXZlLFxuICBPcnRob2dyYXBoaWMsXG59XG4vKipcbiAqIFJlbmRlckNvbnRleHQgY29udGFpbnMgYWxsIG9mIHRoZSBzdGF0ZSByZXF1aXJlZCB0byBjb2xvciBhbmQgcmVuZGVyIHRoZSBkYXRhXG4gKiBzZXQuIFNjYXR0ZXJQbG90IHBhc3NlcyB0aGlzIHRvIGV2ZXJ5IGF0dGFjaGVkIHZpc3VhbGl6ZXIgYXMgcGFydCBvZiB0aGVcbiAqIHJlbmRlciBjYWxsYmFjay5cbiAqIFRPRE8oQGNoYXJsZXNuaWNob2xzb24pOiBUaGlzIHNob3VsZCBvbmx5IGNvbnRhaW4gdGhlIGRhdGEgdGhhdCdzIGNoYW5nZWQgYmV0d2VlblxuICogZWFjaCBmcmFtZS4gRGF0YSBsaWtlIGNvbG9ycyAvIHNjYWxlIGZhY3RvcnMgLyBsYWJlbHMgc2hvdWxkIGJlIHJlYXBwbGllZFxuICogb25seSB3aGVuIHRoZXkgY2hhbmdlLlxuICovXG5leHBvcnQgY2xhc3MgUmVuZGVyQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjYW1lcmE6IFRIUkVFLkNhbWVyYSxcbiAgICBwdWJsaWMgY2FtZXJhVHlwZTogQ2FtZXJhVHlwZSxcbiAgICBwdWJsaWMgY2FtZXJhVGFyZ2V0OiBUSFJFRS5WZWN0b3IzLFxuICAgIHB1YmxpYyBzY3JlZW5XaWR0aDogbnVtYmVyLFxuICAgIHB1YmxpYyBzY3JlZW5IZWlnaHQ6IG51bWJlcixcbiAgICBwdWJsaWMgbmVhcmVzdENhbWVyYVNwYWNlUG9pbnRaOiBudW1iZXIsXG4gICAgcHVibGljIGZhcnRoZXN0Q2FtZXJhU3BhY2VQb2ludFo6IG51bWJlcixcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBudW1iZXIsXG4gICAgcHVibGljIHBvaW50Q29sb3JzOiBGbG9hdDMyQXJyYXksXG4gICAgcHVibGljIHBvaW50U2NhbGVGYWN0b3JzOiBGbG9hdDMyQXJyYXksXG4gICAgcHVibGljIGxhYmVsczogTGFiZWxSZW5kZXJQYXJhbXMsXG4gICAgcHVibGljIHBvbHlsaW5lQ29sb3JzOiB7XG4gICAgICBbcG9seWxpbmVJbmRleDogbnVtYmVyXTogRmxvYXQzMkFycmF5O1xuICAgIH0sXG4gICAgcHVibGljIHBvbHlsaW5lT3BhY2l0aWVzOiBGbG9hdDMyQXJyYXksXG4gICAgcHVibGljIHBvbHlsaW5lV2lkdGhzOiBGbG9hdDMyQXJyYXlcbiAgKSB7fVxufVxuIl19
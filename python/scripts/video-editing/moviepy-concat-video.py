from moviepy.editor import VideoFileClip, concatenate_videoclips

vid_1 = VideoFileClip("clip_1.mp4")
vid_2 = VideoFileClip("clip_2.mp4")
vid_3 = VideoFileClip("clip_3.mp4")
vid_4 = VideoFileClip("clip_4.mp4")

combined = concatenate_videoclips([vid_1, vid_2, vid_3, vid_4])
combined.write_videofile("compilation.mp4")
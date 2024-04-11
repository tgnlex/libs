from moviepy.editor import VideoFileClips, vfx

raw_video = VideoFileClip("raw_footage.mp4")
edited_video = raw_video.fx(vfx.fadein, 1).fx(vfx.fadeout, 1)
edited_video.write_videofile("edited_footage.mp4")
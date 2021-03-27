# chargeTracker


Preamptive warning: Due to the absance of a Mac, this app has only been tested on Android Emulators. 
</br>

**This app is a sample charging tracker app for users to see their charging session data, and update their charging preferences built using React Native Expo.**

</br>

The app has 4 different screens:
</br>
* The landing screens: This is the first screen the user sees after opening/launching the app. Here the user can chose whether to access the session data or the preference screen. Both of this paths are accessible via a button. 

</br>

* The PreferenceScreen: Here the user can record preferences. The fields which are captured and Posted to the server are:
1.)	Miles Needed 
2.)	Charge Duration 
3.)	Make 
4.)	Model 
5.)	Year 
6.)	Mileage 
7.)	Battery Size

</br>

* SessionScreenOverview: In this screen all the available sessions are automatically displayed. The user can chose the session for which the graph should be displayed. The id of the chose session will be passed on to the next screen the “SessionScreen”.

</br>

* SessionScreen: The SessionScreen gets the id for the chosen session by SessionScreenOverview. Ther fetch API shows the appropriate data in the graph. 

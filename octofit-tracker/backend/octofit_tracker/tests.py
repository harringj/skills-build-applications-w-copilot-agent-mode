from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_user_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(email='test@example.com', name='Test User', team=team)
        self.assertEqual(str(user), 'Test User')

    def test_activity_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(email='test@example.com', name='Test User', team=team)
        activity = Activity.objects.create(user=user, type='run', duration=10)
        self.assertEqual(str(activity), 'Test User - run')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='Test Desc')
        self.assertEqual(str(workout), 'Test Workout')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(email='test@example.com', name='Test User', team=team)
        leaderboard = Leaderboard.objects.create(user=user, score=50)
        self.assertEqual(str(leaderboard), 'Test User: 50')
